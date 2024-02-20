mod perlin;

use web_sys::window;
use yew::{classes, html, Component, Context, Html};

struct Index;

impl Component for Index {
    type Message = ();

    type Properties = ();

    fn create(_: &Context<Self>) -> Self {
        Self
    }

    fn view(&self, _: &Context<Self>) -> Html {
        let (mut width, mut height) = (16, 9);

        if let Some(window) = window() {
            let window_width = window
                .inner_width()
                .unwrap_or_default()
                .as_f64()
                .unwrap_or(0f64);
            let window_height = window
                .inner_height()
                .unwrap_or_default()
                .as_f64()
                .unwrap_or(0f64);

            (width, height) = if window_width > window_height {
                (16, 9)
            } else {
                (9, 16)
            }
        }

        let perlin_base64 =
            perlin::Noise::generate(width * 40, height * 40, 30f32, 4u32, 0.5f32, 2f32);

        html! {
            <main>
                <section class={classes!("front-section")} style={format!("background-image: url(data:image/jpeg;base64,{})", perlin_base64)}>
                    <h1 class="welcome-message">{"hi, i'm felix."}</h1>
                </section>
            </main>
        }
    }
}

fn main() {
    yew::Renderer::<Index>::new().render();
}
