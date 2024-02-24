use yew::{classes, html, Component, Context, Html};

use crate::components::ui::Header;

pub struct Infinite;

impl Component for Infinite {
    type Message = ();

    type Properties = ();

    fn create(_: &Context<Self>) -> Self {
        Self
    }

    fn view(&self, _: &Context<Self>) -> Html {
        html! {
            <section class={classes!("section")}>
                <Header text={"Infinite-Craft"} />
            </section>
        }
    }
}
