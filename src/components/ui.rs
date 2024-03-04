use yew::{classes, function_component, html, Html, Properties};

#[derive(Properties, PartialEq)]
pub struct HeaderProperties {
    pub text: String,
}

#[derive(Properties, PartialEq)]
pub struct ButtonProperties {
    pub title: String,
    pub link: String,
    #[prop_or(true)]
    pub new_tab: bool,
}

#[function_component]
pub fn Header(props: &HeaderProperties) -> Html {
    html! {
        <h1 class={classes!("header")}>
            {props.text.clone()}
        </h1>
    }
}

#[function_component]
pub fn Button(props: &ButtonProperties) -> Html {
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
