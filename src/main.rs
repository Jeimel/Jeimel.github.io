mod components;
mod pages;

use yew::{classes, function_component, html, Html};
use yew_router::prelude::{HashRouter, Routable, Switch};

use components::ui::Header;
use pages::{home::Home, infinite::Infinite};

#[derive(Clone, Routable, PartialEq)]
enum Route {
    #[at("/")]
    Home,
    #[at("/infinite")]
    Infinite,
    #[not_found]
    #[at("/404")]
    NotFound,
}

fn switch(routes: Route) -> Html {
    match routes {
        Route::Infinite => {
            html! { <Infinite /> }
        }
        Route::Home => {
            html! { <Home /> }
        }
        Route::NotFound => html! {
            <section class={classes!("section")}>
                <Header text={"404."} />
            </section>
        },
    }
}

#[function_component]
fn App() -> Html {
    html! {
        <HashRouter>
            <Switch<Route> render={switch} />
            <footer class={classes!("section")}>
                <Header text={"jeimel."} />
            </footer>
        </HashRouter>
    }
}

fn main() {
    yew::Renderer::<App>::new().render();
}
