import Meta from "../layouts/meta";
import Main from "../layouts/main";

export default function Resume(){
    return (
        <Main 
            meta={
                <Meta
                    title="Kendra Wright: Resume"
                    description="Download Kendra Wright's UX Designer Resume."
                />
            }
        >
            <h1 className="gold brown-sugar">Resume</h1>
        </Main>
    );
}
