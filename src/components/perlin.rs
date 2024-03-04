use base64::{engine::general_purpose, Engine};
use image::{Rgb, RgbImage};
use rand::{seq::SliceRandom, thread_rng};
use std::{
    io::Cursor,
    ops::{Index, IndexMut},
};

use yew::{classes, html, Component, Context, Html, Properties};

#[derive(Properties, PartialEq)]
pub struct TerrainProperties {
    #[prop_or_default]
    pub children: Html,
    pub width: u32,
    pub height: u32,
    pub front_ratio: f32,
    pub window_width: u32,
    pub window_height: u32,
    #[prop_or(false)]
    pub mobile: bool,
    #[prop_or(40f32)]
    pub scale: f32,
    #[prop_or(4u32)]
    pub octaves: u32,
    #[prop_or(0.5f32)]
    pub persistance: f32,
    #[prop_or(2f32)]
    pub lacunarity: f32,
}

pub struct Terrain;

impl Component for Terrain {
    type Message = ();

    type Properties = TerrainProperties;

    fn create(_: &Context<Self>) -> Self {
        Self
    }

    fn view(&self, ctx: &Context<Self>) -> Html {
        let props = ctx.props();

        let mut noise = vec![0f32; (props.width * props.height) as usize];

        let generate = |width, height, front_ratio| {
            Terrain::generate(
                width,
                height,
                front_ratio,
                props.scale,
                props.octaves,
                props.persistance,
                props.lacunarity,
            )
        };

        noise = if props.mobile {
            let front_size = (props.height as f32 * props.front_ratio) as u32;
            let part_size = (props.height - front_size + 1) / 2;

            let noise_top = generate(props.width, part_size, 0f32);
            let noise_bottom = generate(props.width, part_size, 0f32);

            noise
                .iter_mut()
                .enumerate()
                .map(|(i, value)| {
                    let x = i as u32 % props.width;
                    let y = i as u32 / props.width;

                    if y < part_size {
                        return noise_top[i];
                    }
                    if y >= part_size + front_size {
                        return noise_bottom
                            [((y - part_size - front_size) * props.width + x) as usize];
                    }

                    *value
                })
                .collect()
        } else {
            generate(props.width, props.height, props.front_ratio)
        };

        let mut img = RgbImage::new(props.width, props.height);
        for y in 0..props.height {
            for x in 0..props.width {
                img.put_pixel(
                    x,
                    y,
                    Terrain::pixel_color(noise[(y * props.width + x) as usize]),
                )
            }
        }

        let mut buffer: Vec<u8> = Vec::new();
        img.write_to(&mut Cursor::new(&mut buffer), image::ImageOutputFormat::Png)
            .unwrap();

        let perlin_base64 = general_purpose::STANDARD.encode(buffer);

        html! {
            <section
                class={classes!("section", "front-background")}
                style={
                    format!(
                        "background-image: url(data:image/jpeg;base64,{}); background-size: {}px {}px;",
                        perlin_base64, props.window_width, props.window_height
                    )
                }
            >
                {ctx.props().children.clone()}
            </section>
        }
    }
}

impl Terrain {
    fn generate(
        width: u32,
        height: u32,
        front_ratio: f32,
        scale: f32,
        octaves: u32,
        persistance: f32,
        lacunarity: f32,
    ) -> Vec<f32> {
        let fall_off_map = FallOffMap::new(width, height, front_ratio);

        let mut noise = vec![0f32; (width * height) as usize];

        let perlin_noise = PerlinNoise::new();

        let (mut min_noise, mut max_noise) = (f32::MAX, f32::MIN);

        for y in 0..height {
            for x in 0..width {
                let (mut amplitude, mut frequency, mut noise_height) = (1f32, 1f32, 0f32);

                for _ in 0..octaves {
                    let sample_x = x as f32 / scale * frequency;
                    let sample_y = y as f32 / scale * frequency;

                    let perlin_value = perlin_noise.noise(sample_x, sample_y);
                    noise_height += perlin_value * amplitude;

                    amplitude *= persistance;
                    frequency *= lacunarity;
                }

                (min_noise, max_noise) = (min_noise.min(noise_height), max_noise.max(noise_height));

                noise[(y * width + x) as usize] = noise_height;
            }
        }

        noise
            .iter_mut()
            .enumerate()
            .map(|(i, noise_height)| {
                Utility::clamp01(
                    Utility::inverse_lerp(*noise_height, min_noise, max_noise) - fall_off_map[i],
                )
            })
            .collect()
    }

    fn pixel_color(noise: f32) -> Rgb<u8> {
        match noise {
            _ if noise < 0.18 => Rgb([52, 14, 156]),  // Water1
            _ if noise < 0.42 => Rgb([82, 40, 199]),  // Water2
            _ if noise < 0.5 => Rgb([196, 172, 63]),  // Beach
            _ if noise < 0.6 => Rgb([49, 215, 4]),    // Grass1
            _ if noise < 0.72 => Rgb([42, 133, 21]),  // Grass2
            _ if noise < 0.8 => Rgb([69, 44, 44]),    // Mountain1
            _ if noise < 0.9 => Rgb([45, 31, 31]),    // Mountain2
            _ if noise < 1.0 => Rgb([154, 168, 153]), // snow
            _ => Rgb([0, 0, 0]),
        }
    }
}

struct PerlinNoise {
    permutation: Vec<usize>,
}

impl PerlinNoise {
    pub fn new() -> Self {
        let mut permutation: Vec<usize> = (0..256).collect();
        permutation.shuffle(&mut thread_rng());

        for i in 0..256 {
            permutation.push(permutation[i]);
        }

        Self { permutation }
    }

    pub fn noise(&self, x: f32, y: f32) -> f32 {
        let (x_floored, y_floored) = (x - x.floor(), y - y.floor());
        let (x_wrapped, y_wrapped) = (x as usize & 255, y as usize & 255);

        let grid_points = [
            [x_floored - 1f32, y_floored - 1f32],
            [x_floored, y_floored - 1f32],
            [x_floored - 1f32, y_floored],
            [x_floored, y_floored],
        ];

        let permutation_values = [
            self.permutation[self.permutation[x_wrapped + 1] + y_wrapped + 1],
            self.permutation[self.permutation[x_wrapped] + y_wrapped + 1],
            self.permutation[self.permutation[x_wrapped + 1] + y_wrapped],
            self.permutation[self.permutation[x_wrapped] + y_wrapped],
        ];

        let dot_products = [
            PerlinNoise::dot(permutation_values[0], grid_points[0]),
            PerlinNoise::dot(permutation_values[1], grid_points[1]),
            PerlinNoise::dot(permutation_values[2], grid_points[2]),
            PerlinNoise::dot(permutation_values[3], grid_points[3]),
        ];

        let u = PerlinNoise::fade(x_floored);
        let v = PerlinNoise::fade(y_floored);

        Utility::lerp(
            u,
            Utility::lerp(v, dot_products[3], dot_products[1]),
            Utility::lerp(v, dot_products[2], dot_products[0]),
        )
    }

    fn dot(value: usize, point: [f32; 2]) -> f32 {
        let h = value & 3;

        match h {
            0 => 1f32 * point[0] + 1f32 * point[1],
            1 => -1f32 * point[0] + 1f32 * point[1],
            2 => -1f32 * point[0] + -1f32 * point[1],
            3 => 1f32 * point[0] + -1f32 * point[1],
            _ => 0f32,
        }
    }

    fn fade(t: f32) -> f32 {
        ((6f32 * t - 15f32) * t + 10f32) * t * t * t
    }
}

struct FallOffMap {
    map: Vec<f32>,
}

impl FallOffMap {
    const A: f32 = 5f32;
    const B: f32 = 8f32;

    pub fn new(width: u32, height: u32, threshold: f32) -> Self {
        let map = FallOffMap::generate(width, height, threshold);

        FallOffMap { map }
    }

    fn generate(width: u32, height: u32, threshold: f32) -> Vec<f32> {
        let mut map = vec![0f32; (width * height) as usize];

        for y in 0..height {
            for x in 0..width {
                let (value_x, value_y) = (
                    x as f32 / width as f32 * 2f32 - 1f32,
                    y as f32 / height as f32 * 2f32 - 1f32,
                );

                let value = Utility::abs32(value_x).max(Utility::abs32(value_y));
                map[(y * width + x) as usize] = FallOffMap::evaluate(value, threshold);
            }
        }

        map
    }

    fn evaluate(value: f32, threshold: f32) -> f32 {
        if value < threshold {
            return -FallOffMap::func(value + (1f32 - threshold)) + 1f32;
        }
        FallOffMap::func(value)
    }

    fn func(value: f32) -> f32 {
        value.powf(FallOffMap::A)
            / (value.powf(FallOffMap::A)
                + (FallOffMap::B - FallOffMap::B * value).powf(FallOffMap::A))
    }
}

impl Index<usize> for FallOffMap {
    type Output = f32;
    fn index<'a>(&'a self, i: usize) -> &'a f32 {
        &self.map[i]
    }
}

impl IndexMut<usize> for FallOffMap {
    fn index_mut<'a>(&'a mut self, i: usize) -> &'a mut f32 {
        &mut self.map[i]
    }
}

struct Utility;

impl Utility {
    fn lerp(t: f32, a: f32, b: f32) -> f32 {
        a + t * (b - a)
    }

    fn inverse_lerp(t: f32, a: f32, b: f32) -> f32 {
        if a != b {
            return Utility::clamp01((t - a) / (b - a));
        }

        0f32
    }

    pub fn abs32(x: f32) -> f32 {
        f32::from_bits(x.to_bits() & (i32::MAX as u32))
    }

    fn clamp01(value: f32) -> f32 {
        match value {
            _ if value < 0f32 => 0f32,
            _ if value > 1f32 => 1f32,
            _ => value,
        }
    }
}
