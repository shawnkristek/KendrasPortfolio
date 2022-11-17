import Meta from "../layouts/meta";
import Main from "../layouts/main";

export default function Designs(){
    return (
        <Main 
            meta={
                <Meta
                    title="UX Designs"
                    description="A collection of Kendra Wright's favorite UX Design projects."
                />
            }
        >
            <h1 className="gold brown-sugar">Designs</h1>
        </Main>
    );
}
