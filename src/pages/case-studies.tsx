import Meta from "../layouts/meta";
import Main from "../layouts/main";

import DropDown from "../components/dropdown";

const urls = [
    { text: "Title", href: "url/here" },
    { text: "Title", href: "url/here" },
    { text: "Title", href: "url/here" },
]

export default function CaseStudies() {
    return (
        <Main
            meta={
                <Meta
                    title="KW: Case Studies"
                    description="A collection of Kendra Wrights' favorite UX Design case studies."
                />
            }
        >
            <div className="grid grid-flow-row gap-[10rem]">
                <h1 id="" className="gold brown-sugar mt-20">Case Studies</h1>
                <h1 id="kindle-book-clubs" className="gold brown-sugar mt-20">Kindle Book Clubs</h1>
                <h1 id="matchbox-marketplace" className="gold brown-sugar mt-20">Matchbox Marketplace</h1>
                <h1 id="in-progress" className="gold brown-sugar mt-20">In Progress</h1>
            </div>
        </Main>
    );
}
