import { useEffect, useState } from "react";

const Footer = () => {
    const date = new Date().getFullYear();
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        setIsMobile(mediaQuery.matches);
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <>

            <div id="contact" className={isMobile ? "w-full bg-primary px-10 flex flex-col" : "h-[50vh] w-full bg-primary px-10 flex flex-col"}>
                <div className={isMobile ? 'w-full h-2 green-horizontal-gradient' : 'w-full h-[10px] green-horizontal-gradient'}></div>
                <div id="footer_container" className={isMobile ? "py-10 flex flex-row justify-center mx-auto w-[100%]" : "py-20 flex flex-row justify-center max-w-6xl mx-auto w-[100%]"}>

                    <div id="footer_top" className={isMobile ? "flex flex-col w-[100%] justify-center" : "flex flex-row w-[100%] justify-center"}>
                        <div id="footer_top__contacts" className={isMobile ? "flex flex-col items-start gap-10 w-[100%]" : "flex flex-row justify-between gap-10 w-[100%]"} >
                            <div className={isMobile ? "flex flex-col justify-items-stretch w-100% gap-5" : "flex flex-col justify-items-stretch w-30% gap-5"}>
                                <div className="flex flex-row gap-5">
                                    <p> E-pasts: </p>
                                    <a href=""><p>email@email.com</p></a>
                                </div>
                                <div className="flex flex-row gap-5">
                                    <p> Telefons: </p>
                                    <a href=""><p>+371 1234567</p></a>
                                </div>
                                <div className="flex flex-row gap-5">
                                    <p> Mājaslapa: </p>
                                    <a href=""><p> www.homepage.example</p></a>
                                </div>
                            </div>
                            <div className='w-1 h-100% green-gradient' > </div>
                            <div className={isMobile ? "flex flex-col justify-items-stretch w-100% gap-5" : "flex flex-col justify-items-stretch w-30% gap-5"}>
                                <div className="flex flex-row gap-5">

                                    <a href=""><p> React: </p></a>
                                </div>
                                <div className="flex flex-row gap-5">

                                    <a href=""><p> Three: </p></a>
                                </div>
                                <div className="flex flex-row gap-5">

                                    <a href=""><p> Vite: </p></a>
                                </div>
                            </div>
                            <div className='w-1 h-100% green-gradient' > </div>
                            <div className={isMobile ? "flex flex-col justify-items-stretch w-100% gap-5" : "flex flex-col justify-items-stretch w-30% gap-5"}>
                                <div className="flex flex-row gap-5">

                                    <a href=""><p>Notion</p></a>
                                </div>
                                <div className="flex flex-row gap-5">

                                    <a href=""><p> Tailwind: </p></a>
                                </div>
                                <div className="flex flex-row gap-5">

                                    <a href=""><p> Kamatera: </p></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='w-[60%] h-1 green-horizontal-gradient mx-auto' > </div>
                <div id="footer_bot" className=" w-[60%] mx-auto">
                    <div id="footer_row__socials" className="w-[100%] flex flex-row items-center py-10 gap-10 justify-center">
                        <a href="">
                            <svg fill="currentcolor" width="30px" height="30px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title />
                                <path d="M30.8,53.06a146.19,146.19,0,0,1-15.94-.83A13,13,0,0,1,3.39,40.62a83.16,83.16,0,0,1,.12-17.28A13.07,13.07,0,0,1,15.23,11.91a160.72,160.72,0,0,1,33.6,0A13.07,13.07,0,0,1,60.6,23.64a82.79,82.79,0,0,1-.07,16.95A12.85,12.85,0,0,1,49,52.24h0C42.42,52.79,36.41,53.06,30.8,53.06Zm1.29-40a164.28,164.28,0,0,0-16.65.85A11.06,11.06,0,0,0,5.5,23.56a81.11,81.11,0,0,0-.12,16.87,11,11,0,0,0,9.69,9.82,175.5,175.5,0,0,0,33.79,0h0a10.85,10.85,0,0,0,9.67-9.87,80.8,80.8,0,0,0,.07-16.54,11.09,11.09,0,0,0-10-9.91A153,153,0,0,0,32.09,13Z" />
                                <path d="M26,41.5a1,1,0,0,1-1-1v-17a1,1,0,0,1,1.54-.84l14,9a1,1,0,0,1,0,1.71l-14,8A1,1,0,0,1,26,41.5Zm1-16.17V38.78l11.07-6.33Z" />
                            </svg>
                        </a>
                        <a href="">

                            <svg fill="currentcolor" width="30px" height="30px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title />
                                <path d="M19.55,55.08c-7.37,0-13.37-1.58-16.54-3.24A1,1,0,0,1,3.43,50a38.37,38.37,0,0,0,15.86-4.44c-4.41-1.19-8.9-4.34-9.79-8.41a1,1,0,0,1,1.27-1.17,4.33,4.33,0,0,0,1.26.12A15.68,15.68,0,0,1,4.59,23.44a1,1,0,0,1,1.7-.76l0,0q.72.6,1.49,1.13a16.6,16.6,0,0,1-.6-12.94,1,1,0,0,1,1.69-.28C16,18.9,26.08,22.7,31.2,22.53a12.11,12.11,0,0,1-.2-2.2A12.35,12.35,0,0,1,43.34,8a14.33,14.33,0,0,1,8.93,3.42,19.86,19.86,0,0,0,2-.57A23.11,23.11,0,0,0,58,9.23a1,1,0,0,1,1.32,1.42,40.24,40.24,0,0,1-3.8,4.69A37.34,37.34,0,0,0,60.12,14a1,1,0,0,1,1.21,1.51,26.09,26.09,0,0,1-4.91,5c-.15,4.75-3.85,26.26-21.48,32.28l-.11,0A52.51,52.51,0,0,1,19.55,55.08ZM7.67,51.51a48.65,48.65,0,0,0,26.64-.63h0C51.31,45,54.55,23,54.42,20a1,1,0,0,1,.4-.85A23.91,23.91,0,0,0,57.39,17c-1.55.44-3.11.74-3.52.33a1,1,0,0,1-.23-.36,9.72,9.72,0,0,0-.49-1.08,1,1,0,0,1,.31-1.27,20.16,20.16,0,0,0,1.86-2l-.42.14a22.27,22.27,0,0,1-2.77.76,1,1,0,0,1-1-.35C49.93,11.67,46.33,10,43.34,10A10.31,10.31,0,0,0,33.4,23.14a1,1,0,0,1-.79,1.26c-5,.88-15.9-2.55-24.07-11.18-1.24,5,.65,10.69,3.47,13a1,1,0,0,1-1,1.68,26.14,26.14,0,0,1-4.08-2.29c.93,4.33,4,7.93,8.66,10.08a1,1,0,0,1-.09,1.85,12.93,12.93,0,0,1-3.48.5c1.63,3.1,6.15,5.52,9.87,5.91a1,1,0,0,1,.61,1.7C20.32,47.83,14,50.45,7.67,51.51ZM5.58,23.4h0Z" />
                            </svg>
                        </a>
                        <a href="">

                            <svg fill="currentcolor" width="30px" height="30px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title />
                                <path d="M50.22,9.93C46.13,5.33,40.18,3,32.55,3c-10.95,0-16.94,4.82-20,8.86C8.58,17,7,24,8.58,29.76c2.3,8.57,7.43,10.37,7.65,10.44a1,1,0,0,0,1.28-.69L19,34a1,1,0,0,0-.12-.8s-2.8-4.54-1.36-11.51a14,14,0,0,1,5.86-8.58c3.08-2,6.85-2.57,11.2-1.65a13.15,13.15,0,0,1,10.07,9.07c1.85,5.57.67,12.27-2.86,16.29-2.26,2.58-4.68,3.65-7,3.1a5.77,5.77,0,0,1-3.49-2.48l1.83-8.34c.92-3.63,2-7.75-.37-10.3A5.9,5.9,0,0,0,27.47,17,7.34,7.34,0,0,0,22,21.32c-1.9,4-.27,8.93.23,10.24L17.08,51.5a1,1,0,0,0,0,.42l1.41,8.46a1,1,0,0,0,1.71.52l6-6.34a1,1,0,0,0,.25-.45l2.19-8.76A12.58,12.58,0,0,0,36.92,49c7.11.54,17.32-8.7,18.62-19.88C56.39,21.8,54.4,14.63,50.22,9.93Zm3.33,19C52.32,39.49,42.68,47.44,37.08,47c-5.83-.45-7.94-4.19-8-4.35a1,1,0,0,0-1.85.23L24.58,53.38l-4.46,4.69-1-6.28,5.2-20a1,1,0,0,0,0-.65c0-.05-2.18-5.13-.39-8.93a5.38,5.38,0,0,1,3.94-3.24,3.93,3.93,0,0,1,3.54,1.24c1.61,1.75.7,5.31-.1,8.48l-1.89,8.62a1,1,0,0,0,0,.38c.2,1.22,2.11,3.39,4.75,4.14,2.2.63,5.6.5,9.24-3.65,4-4.54,5.32-12,3.25-18.24A15.09,15.09,0,0,0,35,9.52c-4.89-1-9.17-.39-12.71,1.93a16.1,16.1,0,0,0-6.72,9.85A18.84,18.84,0,0,0,17,33.89L15.91,37.8c-1.4-.9-4-3.21-5.39-8.56-1.39-5.17,0-11.52,3.58-16.17C16.92,9.39,22.42,5,32.55,5c7,0,12.48,2.11,16.18,6.26S54.34,22.13,53.56,28.88Z" />
                            </svg>
                        </a>
                        <a href="">
                            <svg fill="currentcolor" width="30px" height="30px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title />
                                <path d="M44,57H20A13,13,0,0,1,7,44V20A13,13,0,0,1,20,7H44A13,13,0,0,1,57,20V44A13,13,0,0,1,44,57ZM20,9A11,11,0,0,0,9,20V44A11,11,0,0,0,20,55H44A11,11,0,0,0,55,44V20A11,11,0,0,0,44,9Z" />
                                <path d="M32,43.67A11.67,11.67,0,1,1,43.67,32,11.68,11.68,0,0,1,32,43.67Zm0-21.33A9.67,9.67,0,1,0,41.67,32,9.68,9.68,0,0,0,32,22.33Z" />
                                <path d="M44.5,21A3.5,3.5,0,1,1,48,17.5,3.5,3.5,0,0,1,44.5,21Zm0-5A1.5,1.5,0,1,0,46,17.5,1.5,1.5,0,0,0,44.5,16Z" />
                            </svg>
                        </a>
                        <a href="">
                            <svg fill="currentcolor" width="30px" height="30px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title />
                                <path d="M44,7H20A13,13,0,0,0,7,20V44A13,13,0,0,0,20,57H44A13,13,0,0,0,57,44V20A13,13,0,0,0,44,7ZM33,55V38a1,1,0,0,0-1-1H27V31h5a1,1,0,0,0,1-1V22a5,5,0,0,1,5-5h8v6H42a3,3,0,0,0-3,3v4a1,1,0,0,0,1,1h6v6H40a1,1,0,0,0-1,1V55ZM55,44A11,11,0,0,1,44,55H41V39h6a1,1,0,0,0,1-1V30a1,1,0,0,0-1-1H41V26a1,1,0,0,1,1-1h5a1,1,0,0,0,1-1V16a1,1,0,0,0-1-1H38a7,7,0,0,0-7,7v7H26a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1h5V55H20A11,11,0,0,1,9,44V20A11,11,0,0,1,20,9H44A11,11,0,0,1,55,20Z" />
                            </svg>
                        </a>
                    </div>
                    <div id="footer_row_copyright" className="w-[100%] flex flex-col items-center py-10">
                        <p>Copyright Liepājas Universitāte {date}</p>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer;