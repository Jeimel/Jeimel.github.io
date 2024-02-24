use web_sys::window;
use yew::{classes, html, Component, Context, Html};

use crate::components::{perlin::Terrain, project::Project, ui::Button, ui::Header};
pub struct Home;

impl Component for Home {
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
            };
        }

        html! {
            <main>
                <Terrain width={width * scale} height={height * scale}>
                    <Header text={"hi, i'm felix."} />
                    <div class={classes!("front-container")}>
                        <Button title={"github"} link={"https://github.com/jeimel"} />
                        <Button title={"projects"} link={"#projects"} new_tab={false} />
                    </div>
                </Terrain>
                <section id="projects" class={classes!("section")}>
                    <Header text={"projects."} />
                    <div>
                        <Project title={"jeimel.github.io"} link={"https://github.com/Jeimel/jeimel.github.io"} description={"Access the source code for this website, inclusive of a Perlin Noise implementation employed for procedural background image generation. All future subpages will be included in the repository."} />
                        <Project title={"infinite-craft"} link={"https://github.com/Jeimel/infinite-craft"} description={"Currently a Python command line tool to fetch all the recipes and elements from Neal's infinte-craft."} />
                    </div>
                </section>
            </main>
        }
    }
}
