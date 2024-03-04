use web_sys::window;
use yew::{classes, html, Component, Context, Html};

use crate::components::{perlin::Terrain, project::Project, ui::Button, ui::Header};

const BACKGROUND_WIDTH: [u32; 3] = [16 * 40, 9 * 30, 9 * 35];
const BACKGROUND_HEIGHT: [u32; 3] = [9 * 40, 20 * 30, 16 * 35];
const FRONT_WIDTH: [u32; 3] = [800, 350, 550];
const FRONT_HEIGHT: [u32; 3] = [250, 120, 80];

pub struct Home;

impl Component for Home {
    type Message = ();

    type Properties = ();

    fn create(_: &Context<Self>) -> Self {
        Self
    }

    fn view(&self, _: &Context<Self>) -> Html {
        let (mut index, mut front_ratio, mut window_width, mut window_height, mut mobile) =
            (0, 0f32, 1920, 1080, false);

        if let Some(window) = window() {
            window_width = window
                .inner_width()
                .unwrap_or_default()
                .as_f64()
                .unwrap_or(0f64) as u32;
            window_height = window
                .inner_height()
                .unwrap_or_default()
                .as_f64()
                .unwrap_or(0f64) as u32;

            if window_width < 700 {
                index = 1;
                front_ratio = FRONT_HEIGHT[index] as f32 / window_width as f32;
            } else if window_width < 1120 {
                index = 2;
                front_ratio = FRONT_WIDTH[index] as f32 / window_width as f32 - 0.35f32;
            } else {
                front_ratio = FRONT_WIDTH[index] as f32 / window_width as f32 + 0.125f32;
            }

            mobile = window_width < 1120;
        }

        html! {
            <main>
                <Terrain
                    width={BACKGROUND_WIDTH[index]}
                    height={BACKGROUND_HEIGHT[index]}
                    front_ratio={front_ratio}
                    window_width={window_width}
                    window_height={window_height}
                    mobile={mobile}
                >
                    <div
                        style={
                            format!("width: {}px; height: {}px", FRONT_WIDTH[index], FRONT_HEIGHT[index])
                        }
                    >
                        <Header text={"hi, i'm felix."} />
                        <div class={classes!("button-container")}>
                            <Button title={"github"} link={"https://github.com/jeimel"} />
                            <Button title={"projects"} link={"#projects"} new_tab={false} />
                        </div>
                    </div>
                </Terrain>
                <section id="projects" class={classes!("section")}>
                    <Header text={"projects."} />
                    <div>
                        <Project
                            title={"jeimel.github.io"}
                            link={"https://github.com/Jeimel/jeimel.github.io"}
                            description={
                                "Access the source code for this website, inclusive
                                of a Perlin Noise implementation employed for procedural 
                                background image generation. All future subpages will be 
                                included in the repository."
                            }
                        />
                    </div>
                </section>
            </main>
        }
    }
}
