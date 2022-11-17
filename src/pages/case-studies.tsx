import Meta from "../layouts/meta";
import Main from "../layouts/main";

export default function CaseStudies(){
    return (
        <Main 
            meta={
                <Meta
                    title="KW: Case Studies"
                    description="A collection of Kendra Wrights' favorite UX Design case studies."
                />
            }
        >
            <h1 className="gold brown-sugar">Case Studies</h1>
        </Main>
    );
}
