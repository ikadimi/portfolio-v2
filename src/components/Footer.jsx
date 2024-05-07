import { forwardRef } from "react";

function Footer(_, ref) {
    return (
        <footer ref={ref} className="bg-gray-950 h-16 flex border-t-[1px] text-white justify-between items-center w-full px-16">
            <div className="">
                <a className=""
                    href="https://www.linkedin.com/in/ilias-kadimi/"
                    target="_blank" rel="noreferrer">
                    LinkedIn
                </a>
            </div>
            <div className="">
                <a  className="" href="mailto:ikadimi@outlook.com">
                    Get In Touch
                </a>
            </div>
        </footer>
    );
}

export default forwardRef(Footer);