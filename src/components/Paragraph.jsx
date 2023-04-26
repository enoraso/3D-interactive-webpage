import { styles } from "../styles";
const Paragraph = () => {
    /*TODO
    Take content from Notion API
    */

    return(
        <div className="h-[40vh] px-20 py-10" style={{backgroundColor:'white'}}>
            <h2 className='text-4xl font-extrabold text-black'>
                Šī mājaslapa izmanto Three.js un react-three-fiber.
            </h2>
            <p className="mt-5 text-black text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales tortor rutrum augue venenatis elementum. Nullam ut mi eget risus convallis gravida at gravida erat. Mauris a rutrum risus. Proin mattis mattis nulla, at fringilla ante. Pellentesque sed augue eros. Morbi convallis in mauris nec semper. Nam id quam turpis.
            </p>
        </div>
    );
 }

 export default Paragraph;