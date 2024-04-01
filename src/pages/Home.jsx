import { BiPaperPlane, BiWallet, BiHeadphone, BiGift } from "react-icons/bi"
import TopProductCard from "../components/TopProductCard"

const Home = () => {
    return (
        <div className='mt-[70px] md:mt-[250px]'>
            <div className='flex flex-wrap items-center gap-4  md:justify-between p-10 ml-5 font-semibold'>
                <div className="flex gap-2 items-center">
                    <BiPaperPlane className="w-8 h-8 md:w-10 md:h-10 text-[#C8A178]" />
                    <div>
                        <p>ENVIO SIN CARGO</p>
                        <p className="text-gray-400">en compras por encima de $10000</p>
                    </div>

                </div>
                <div className="flex gap-2 items-center">
                    <BiWallet className="w-8 h-8 md:w-10 md:h-10 text-[#C8A178]" />
                    <div>
                        <p>CONTRA REEMBOLSO</p>
                        <p className="text-gray-400">Tu compra protegida 100%</p>
                    </div>

                </div>
                <div className="flex gap-2 items-center">
                    <BiGift className="w-8 h-8 md:w-10 md:h-10 text-[#C8A178]"/>
                    <div>
                        <p>CUPONES DE DESCUENTO</p>
                        <p className="text-gray-400">Ofrecemos cupones especiales</p>
                    </div>

                </div>
                <div className="flex gap-2 items-center">
                    <BiHeadphone className="w-8 h-8 md:w-10 md:h-10 text-[#C8A178]"/>
                    <div>
                        <p>ATENCION AL CLIENTE 24/7</p>
                        <p className="text-gray-400">Llamanos al 0800-888-888</p>
                    </div>

                </div>
            </div>

            <div className="flex items-center flex-col md:justify-center text-3xl gap-5 md:mt-[50px]">
                <h1>Categorias Top</h1>
                <div className="flex flex-wrap items-center justify-center gap-12 md:gap-5 font-bold">
                    <div>
                        <img src="https://media.istockphoto.com/id/1411994205/es/foto/caf%C3%A9-moca-helado-con-crema-en-un-vaso-alto-y-granos-de-caf%C3%A9-portafiltro-tamper-y-jarra-de.jpg?s=612x612&w=0&k=20&c=G4-ZrqUMguJ1PXTC_P8YT4pnaoOwEpAwmCfErGstOR8=" className="h-48 w-72 object-cover rounded-xl" alt="" />
                        <p className="mt-[-100px] text-white flex items-center justify-center">Cafe Mocha</p>
                        <a href="" className=" text-white flex items-center justify-center text-lg font-normal">ver mas</a>
                    </div>
                    <div>
                        <img src="https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/12/07/cafe-expresso.jpeg" className="h-48 w-72 object-cover rounded-xl" alt="" />
                        <p className="mt-[-100px] text-white flex items-center justify-center">Espresso</p>
                        <a href="" className=" text-white flex items-center justify-center text-lg font-normal">ver mas</a>
                    </div>
                    <div>
                        <img src="https://cdn.pixabay.com/photo/2016/08/03/05/33/latte-1565931_1280.jpg" className="h-48 w-72 object-cover rounded-xl" alt="" />
                        <p className="mt-[-100px] text-white flex items-center justify-center">Capuccino</p>
                        <a href="" className=" text-white flex items-center justify-center text-lg font-normal">ver mas</a>
                    </div>
                </div>
                <div className="mt-24 flex items-center  flex-col">
                    <h1>Productos Top</h1>
                    <div className="text-lg flex flex-col md:flex-row  gap-5">
                        <button className=' bg-[#C8A178] text-white  p-2 rounded-full w-36 h-8 mt-3 font-semibold flex items-center justify-center'>Clasicos</button>
                        <button className=' text-gray-500  p-2 rounded-full w-36 h-8 mt-3 font-semibold flex items-center justify-center'>Nuevos</button>
                        <button className=' text-gray-500   p-2 rounded-full w-36 h-8 mt-3 font-semibold flex items-center justify-center'>Mas vendidos</button>

                        

                        
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-center justify-center mt-5 mb-5">
                    <TopProductCard/>
                    <TopProductCard/>
                    <TopProductCard/>
                    <TopProductCard/>
                    </div>
                    
                    
                </div>
            </div>


        </div>
    )
}

export default Home