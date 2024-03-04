use yew::{classes, function_component, html, Html, Properties};

use crate::components::ui::Button;

#[derive(Properties, PartialEq)]
pub struct ProjectProperties {
    pub title: String,
    pub link: String,
    pub description: String,
}

#[function_component]
pub fn Project(props: &ProjectProperties) -> Html {
    html! {
        <div class={classes!("project")}>
            <Button title={props.title.clone()} link={props.link.clone()} />
            <span class={classes!("project-text")}>
                {props.description.clone()}
            </span>
        </div>
    }
}
