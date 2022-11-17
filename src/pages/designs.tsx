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
            <div className="grid grid-flow-row gap-[10rem]">
                <h1 id="" className="gold brown-sugar mt-20">Designs</h1>
                <h1 id="hotel-booking" className="gold brown-sugar mt-20">Hotel Booking</h1>
                <h1 id="book-box" className="gold brown-sugar mt-20">Book Box</h1>
                <h1 id="mobile-email" className="gold brown-sugar mt-20">Mobile Email</h1>
            </div>
        </Main>
    );
}
