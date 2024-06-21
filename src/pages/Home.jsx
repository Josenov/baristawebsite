import { BiPaperPlane, BiWallet, BiHeadphone, BiGift } from "react-icons/bi"
import { CartProvider } from "../context/CartContext"
import TopProductCard from "../components/TopProductCard"
import SpecialProductCard from "../components/SpecialProductCard"
import BlogCard from "../components/BlogCard"
import BrandsCarousel from "../components/BrandsCarousel"
import Carousel from '../components/Carousel'
import TopCategoryCard from "../components/TopCategoryCard"

import HomeCarousel from "../components/HomeCarousel"
import InfoBanner from "../components/InfoBanner"
import Products from "../Data/Products"


const Home = () => {
    return (
        <CartProvider>
        <div className=' font-pro'>
            <Carousel />
            <InfoBanner />
            <div className='hidden md:flex flex-wrap md:mt-64 items-center justify-center gap-4 m-10 mt-32 md:gap-24 text-left  font-semibold'>

                <div className="flex gap-8">
                    <div className="flex  gap-2 items-center">
                        <BiPaperPlane className="w-20 h-20 md:w-10 md:h-10 text-[#C8A178]" />
                        <div>
                            <p className="text-sm">ENVIO SIN CARGO</p>
                            <p className="text-gray-400 text-sm md:text-md">en compras por encima de $10000</p>
                        </div>

                    </div>
                    <div className="flex gap-2 items-center">
                        <BiWallet className="w-16 h-16 md:w-10 md:h-10 text-[#C8A178]" />
                        <div>
                            <p className="text-sm">CONTRA REEMBOLSO</p>
                            <p className="text-gray-400 text-sm md:text-md">Tu compra protegida 100%</p>
                        </div>

                    </div>
                </div>

                <div className="flex gap-8">
                    <div className="flex gap-2 items-center">
                        <BiGift className="w-16 h-16 md:w-10 md:h-10 text-[#C8A178]" />
                        <div>
                            <p className="text-sm">CUPONES DE DESCUENTO</p>
                            <p className="text-gray-400 text-sm md:text-md">Ofrecemos cupones especiales</p>
                        </div>

                    </div>
                    <div className="flex gap-2 items-center">
                        <BiHeadphone className="w-16 h-16 md:w-10 md:h-10 text-[#C8A178]" />
                        <div>
                            <p className="text-sm">ATENCION AL CLIENTE 24/7</p>
                            <p className="text-gray-400 text-sm md:text-md">Llamanos al 0800-888-888</p>
                        </div>

                    </div>
                </div>


            </div>

            <div className="flex items-center flex-col md:justify-center text-3xl gap-5 md:mt-[50px]">
                <h1>Categorias Top</h1>
                <div className="md:flex flex-wrap items-center justify-center gap-12 md:gap-5 font-bold hidden ">
                    <div>
                        <img src="https://media.istockphoto.com/id/1411994205/es/foto/caf%C3%A9-moca-helado-con-crema-en-un-vaso-alto-y-granos-de-caf%C3%A9-portafiltro-tamper-y-jarra-de.jpg?s=612x612&w=0&k=20&c=G4-ZrqUMguJ1PXTC_P8YT4pnaoOwEpAwmCfErGstOR8=" className="h-48 w-72 object-cover rounded-xl" alt="" />
                        <p className="mt-[-100px] text-white flex items-center justify-center">Cafe Mocha</p>
                        <a href="" className="  flex items-center justify-center text-sm text-gray-300 mt-2">ver mas</a>
                    </div>
                    <div>
                        <img src="https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/12/07/cafe-expresso.jpeg" className="h-48 w-72 object-cover rounded-xl" alt="" />
                        <p className="mt-[-100px] text-white flex items-center justify-center">Espresso</p>
                        <a href="" className="  flex items-center justify-center text-sm text-gray-300 mt-2">ver mas</a>
                    </div>
                    <div>
                        <img src="https://cdn.pixabay.com/photo/2016/08/03/05/33/latte-1565931_1280.jpg" className="h-48 w-72 object-cover rounded-xl" alt="" />
                        <p className="mt-[-100px] text-white flex items-center justify-center">Capuccino</p>
                        <a href="" className="  flex items-center justify-center text-sm text-gray-300 mt-2">ver mas</a>
                    </div>
                </div>
                <div className="flex items-center justify-center  ">
                    <TopCategoryCard />
                </div>

                <div className="md:mt-24 flex items-center  flex-col mt-[24px]">
                    <h1>Productos Top</h1>
                    

                    <TopProductCard />


                </div>

                <div>
                    <HomeCarousel />
                </div>

                <div className="hidden md:flex flex-wrap md:flex-nowrap gap-2 mb-2">
                    <div className="flex flex-col gap-2">
                        <img className="h-96 object-cover w-96" src="https://img.freepik.com/foto-gratis/vista-maquina-hacer-cafe_23-2150698727.jpg" alt="" />
                        <img className="h-96 object-cover  w-96" src="https://cafeplatino.com/wp-content/uploads/2022/01/como-hacer-un-capuccino-perfecto-.jpg" alt="" />
                    </div>
                    <img src="https://img.freepik.com/fotos-premium/mano-barista-cafe-vertido-taza-cafeteria-cafetera-maquina-closeup-portafiltro-profesional-ai-generativa_771335-59187.jpg" alt="" />
                    <div className="flex flex-col gap-2">
                        <img className="h-96 object-cover w-96" src="https://www.somoselcafe.com.ar/img/novedades/20.jpg" alt="" />
                        <img className="h-96 object-cover w-96" src="https://s0.smartresize.com/wallpaper/738/342/HD-wallpaper-coffee-coffee-maker-hands-barista.jpg" alt="" />
                    </div>
                </div>

                <div className="md:mt-16 mt-10 flex items-center flex-col">
                    <h1>Productos Especiales</h1>


                    <div className="flex flex-col md:flex-row items-center justify-center h-full mt-5 mb-5 md:gap-5">
                        <SpecialProductCard />

                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center h-full mt-5 mb-5 md:gap-5">
                        <Products />

                    </div>




                </div>

                <div className="flex items-center  flex-col">
                    <h1>Ultimos Blogs</h1>




                    <div className="w-full " >
                        <BlogCard />


                    </div>




                </div>

                <div className="flex flex-col justify-center text-center">
                    <p className="text-sm">Nos Recomiendan:</p>
                    <BrandsCarousel />
                </div>


            </div>


        </div>

        </CartProvider>
    )
}

export default Home