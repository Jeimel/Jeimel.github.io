use web_sys::window;
use yew::{classes, html, Component, Context, Html};

use crate::components::{perlin::Terrain, project::Project, ui::Button, ui::Header};

trait Background {
    fn width(&self) -> u32;

    fn height(&self) -> u32;
}

struct Mobile;

impl Background for Mobile {
    fn width(&self) -> u32 {
        9 * 30
    }

    fn height(&self) -> u32 {
        20 * 30
    }
}

struct Tablet;

impl Background for Tablet {
    fn width(&self) -> u32 {
        16 * 40
    }

    fn height(&self) -> u32 {
        9 * 40
    }
}

struct Desktop;

impl Background for Desktop {
    fn width(&self) -> u32 {
        16 * 40
    }

    fn height(&self) -> u32 {
        9 * 40
    }
}

pub struct Home;

impl Component for Home {
    type Message = ();

    type Properties = ();

    fn create(_: &Context<Self>) -> Self {
        Self
    }

    fn view(&self, _: &Context<Self>) -> Html {
        let (mut window_width, mut window_height, mut mobile) = (1920, 1080, false);

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

            mobile = window_width < 1120;
        }

        let background: Box<dyn Background> = if window_width < 700 {
            Box::new(Mobile {})
        } else if window_width < 1120 {
            Box::new(Tablet {})
        } else {
            Box::new(Desktop {})
        };

        html! {
            <main>
                <Terrain
                    width={background.width()}
                    height={background.height()}
                    window_width={window_width}
                    window_height={window_height}
                    mobile={mobile}
                >
                    <div>
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
                            title={"Infomate"}
                            link={"https://github.com/Jeimel/Infomate"}
                            description={
                                ""
                            }
                        />
                    </div>
                    <div>
                        <Project
                            title={"Battleship"}
                            link={"https://github.com/Jeimel/Battleship"}
                            description={
                                ""
                            }
                        />
                    </div>
                </section>
            </main>
        }
    }
}
