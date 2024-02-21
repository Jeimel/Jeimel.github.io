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
        let (mut width, mut height, mut scale) = (16, 9, 40);

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

            (width, height, scale) = if window_width > window_height {
                (16, 9, 40)
            } else {
                (9, 20, 30)
            }
        }

        let perlin_base64 =
            perlin::Noise::generate(width * scale, height * scale, 40f32, 4u32, 0.5f32, 2f32);

        html! {
            <main>
                <section id="front" class={classes!("front-section")} style={format!("background-image: url(data:image/jpeg;base64,{})", perlin_base64)}>
                    <h1 class={classes!("header-message")}>{"hi, i'm felix."}</h1>
                    <div class={classes!("front-container")}>
                        <span class={classes!("front-button")}>
                            <a href="https://github.com/jeimel">
                                {"github"}
                            </a>
                        </span>
                        <span class={classes!("front-button")}>
                            <a href="#projects">
                                {"projects"}
                            </a>
                        </span>
                    </div>
                </section>
                <section id="projects" class={classes!("projects-section")}>
                <h1 class={classes!("header-message")}>{"projects"}</h1>
                </section>
            </main>
        }
    }
}

fn main() {
    yew::Renderer::<Index>::new().render();
}
