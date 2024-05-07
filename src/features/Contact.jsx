import '../styles/contact.css';

function Contact() {
    return (
        <section className="bg-gray-950 flex lg:flex-row align-items-center space-between w-full p-[30px]">
            <div className="lg:w-1/2">
                <a  className="uppercase hover:bg-white hover:text-black transition-colors get-in-touch block text-center text-white text-[30px] w-full lg:!w-fit lg:text-[60px] rounded-full px-9 py-2 border border-white" href="mailto:ikadimi@outlook.com">
                    Get In Touch
                </a>
            </div>
            <div>
                <a className="link-underline gap-4 text-[20px] social-link lg:text-[30px] flex items-center relative lg:w-1/3 justify-between text-white"
                    href="https://www.linkedin.com/in/ilias-kadimi/"
                    target="_blank" rel="noreferrer">
                    LinkedIn
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Arrow / Arrow_Up_Right_LG"><path id="Vector" d="M18.3646 5.63623H11.2939M18.3646 5.63623L18.3643 12.7073M18.3646 5.63623L5.63672 18.3642" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
                </a>
            </div>
        </section>
    );
}

export default Contact;