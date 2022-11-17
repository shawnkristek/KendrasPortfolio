import Meta from "../layouts/meta";
import Main from "../layouts/main";

export default function Contact(){
    return (
        <Main 
            meta={
                <Meta
                    title="Contact Me"
                    description="Here are the best ways to connect with Kendra Wright to discuss UX Design."
                />
            }
        >
            <h1 className="gold brown-sugar">Contact</h1>
        </Main>
    );
}
