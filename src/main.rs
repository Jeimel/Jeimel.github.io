mod perlin;

use web_sys::window;
use yew::{classes, function_component, html, Component, Context, Html, Properties};

#[derive(Properties, PartialEq)]
struct HeaderProperties {
    pub text: String,
}

#[derive(Properties, PartialEq)]
struct ButtonProperties {
    pub title: String,
    pub link: String,
    #[prop_or(true)]
    pub new_tab: bool,
}

#[derive(Properties, PartialEq)]
struct ProjectProperties {
    pub title: String,
    pub link: String,
    pub description: String,
}

#[function_component]
fn Header(props: &HeaderProperties) -> Html {
    html! {
        <h1 class={classes!("header")}>
            {props.text.clone()}
        </h1>
    }
}

#[function_component]
fn Button(props: &ButtonProperties) -> Html {
    html! {
        <span class={classes!("button")}>
            if props.new_tab {
                <a target="_blank" rel="noopener noreferrer" href={props.link.clone()}>{props.title.clone()}</a>
            } else {
                <a href={props.link.clone()}>{props.title.clone()}</a>
            }
        </span>
    }
}

#[function_component]
fn Project(props: &ProjectProperties) -> Html {
    html! {
        <div class={classes!("project")}>
            <Button title={props.title.clone()} link={props.link.clone()}/>
            <span class={classes!("project-text")}>
                {props.description.clone()}
            </span>
        </div>
    }
}

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
            };
        }

        let perlin_base64 =
            perlin::Noise::generate(width * scale, height * scale, 40f32, 4u32, 0.5f32, 2f32);

        html! {
            <main>
                <section id="front" class={classes!("section", "front-background")} style={format!("background-image: url(data:image/jpeg;base64,{})", perlin_base64)}>
                    <Header text={"hi, i'm felix."} />
                    <div class={classes!("front-container")}>
                        <Button title={"github"} link={"https://github.com/jeimel"} />
                        <Button title={"projects"} link={"#projects"} new_tab={false} />
                    </div>
                </section>
                <section id="projects" class={classes!("section")}>
                    <Header text={"projects."} />
                    <div class={classes!("")}>
                        <Project title={"jeimel.github.io"} link={"https://github.com/Jeimel/jeimel.github.io"} description={"Access the source code for this website, inclusive of a Perlin Noise implementation employed for procedural background image generation. All future subpages will be included in the repository."} />
                        <Project title={"infinite-craft"} link={"https://github.com/Jeimel/infinite-craft"} description={"Currently a Python command line tool to fetch all the recipes and elements from Neal's infinte-craft."} />
                    </div>
                </section>
                <section id="footer" class={classes!("section")}>
                    <Header text={"jeimel."} />
                </section>
            </main>
        }
    }
}

fn main() {
    yew::Renderer::<Index>::new().render();
}
