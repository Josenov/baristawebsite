import { BiPaperPlane, BiWallet, BiHeadphone, BiGift } from "react-icons/bi"
import TopProductCard from "../components/TopProductCard"
import SpecialProductCard from "../components/SpecialProductCard"
import BlogCard from "../components/BlogCard"
import BrandsCarousel from "../components/BrandsCarousel"
import Carousel from '../components/Carousel'
import TopCategoryCard from "../components/TopCategoryCard"
import { AiFillStar } from "react-icons/ai"
import HomeCarousel from "../components/HomeCarousel"

const Home = () => {
    return (
        <div className=' font-pro'>
            <Carousel />
            <div className='flex flex-wrap md:mt-56 items-center gap-4  md:justify-between p-10 ml-5 font-semibold'>
                <div className="flex gap-2 items-center">
                    <BiPaperPlane className="w-8 h-8 md:w-10 md:h-10 text-[#C8A178]" />
                    <div>
                        <p>ENVIO SIN CARGO</p>
                        <p className="text-gray-400 text-sm md:text-md">en compras por encima de $10000</p>
                    </div>

                </div>
                <div className="flex gap-2 items-center">
                    <BiWallet className="w-8 h-8 md:w-10 md:h-10 text-[#C8A178]" />
                    <div>
                        <p>CONTRA REEMBOLSO</p>
                        <p className="text-gray-400 text-sm md:text-md">Tu compra protegida 100%</p>
                    </div>

                </div>
                <div className="flex gap-2 items-center">
                    <BiGift className="w-8 h-8 md:w-10 md:h-10 text-[#C8A178]" />
                    <div>
                        <p>CUPONES DE DESCUENTO</p>
                        <p className="text-gray-400 text-sm md:text-md">Ofrecemos cupones especiales</p>
                    </div>

                </div>
                <div className="flex gap-2 items-center">
                    <BiHeadphone className="w-8 h-8 md:w-10 md:h-10 text-[#C8A178]" />
                    <div>
                        <p>ATENCION AL CLIENTE 24/7</p>
                        <p className="text-gray-400 text-sm md:text-md">Llamanos al 0800-888-888</p>
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
                <div className="flex justify-center ml-16">
                    <TopCategoryCard />
                </div>

                <div className="md:mt-24 flex items-center  flex-col mt-[24px]">
                    <h1>Productos Top</h1>

                    <div className="text-lg  md:text-lg flex flex-row  md:gap-5">
                        <button className=' bg-[#C8A178] text-white  p-2 rounded-full md:w-36 h-8 mt-3 font-semibold flex items-center justify-center'>Clasicos</button>
                        <button className=' text-gray-500  p-2 rounded-full md:w-36 h-8 mt-3 font-semibold flex items-center justify-center'>Nuevos</button>
                        <button className=' text-gray-500   p-2 rounded-full md:w-36 h-8 mt-3 font-semibold flex items-center justify-center'>Mas vendidos</button>




                    </div>
                    

                    <div className="hidden md:flex  items-center justify-center  rounded-lg gap-10 mb-10 mt-5">

                <div className=" w-[200px] h-[350px]  flex  flex-col rounded-lg ">
                    <p className='bg-[#C8A178] rounded-full text-white w-10 text-center text-sm font-sans m-2 ml-10'>-20%</p>
                    <div className='flex items-center justify-center flex-col rounded-lg'>
                    
                        <img className='object-cover h-64' src="https://img.pikbest.com/origin/09/39/61/99BpIkbEsTHm7.png!sw800" alt="" />
                        <div className='flex mt-2 p-2'>
                            <AiFillStar className='h-3 text-[#C8A178]' />
                            <AiFillStar className='h-3 text-[#C8A178]' />
                            <AiFillStar className='h-3 text-[#C8A178]' />
                            <AiFillStar className='h-3 text-[#C8A178]' />
                            <AiFillStar className='h-3 text-[#C8A178]' />
                        </div>
                        <p className='text-lg'>Cafe Irlandes</p>
                        <div className='flex items-center gap-1'>
                            <p className='text-lg font-bold'>$5200</p>
                            <del className='text-sm text-slate-500'>$6500</del>
                        </div>

                    </div>
                </div>
                <div className=" w-[200px] h-[350px] flex  flex-col rounded-lg">
                    <p className='bg-[#C8A178] rounded-full text-white w-10 text-center text-sm font-sans m-2 ml-10'>-30%</p>
                    <div className='flex items-center justify-center flex-col rounded-lg'>
                        <img className='object-scale-down h-64' src="https://i.pinimg.com/originals/5a/d5/10/5ad510d619e6c797c4914de4a72c2859.jpg" alt="" />
                        <div className='flex mt-2 p-2'>
                            <AiFillStar className='h-3 text-[#C8A178]' />
                            <AiFillStar className='h-3 text-[#C8A178]' />
                            <AiFillStar className='h-3 text-[#C8A178]' />
                            <AiFillStar className='h-3 text-[#C8A178]' />
                            <AiFillStar className='h-3 text-[#C8A178]' />
                        </div>
                        <p className='text-lg'>Capuccino</p>
                        <div className='flex items-center gap-1'>
                            <p className='text-lg font-bold'>$3500</p>
                            <del className='text-sm text-slate-500'>$5000</del>
                        </div>

                    </div>

                </div>
                <div className=" w-[200px] h-[350px] flex  flex-col rounded-lg">
                    <p className='bg-[#C8A178] rounded-full text-white w-10 text-center text-sm font-sans m-2 ml-10'>-10%</p>
                    <div className='flex items-center justify-center flex-col rounded-lg'>
                        <img className='object-cover h-64' src="https://americancookiesbrasil.com.br/wp-content/uploads/2022/06/mocha.png" alt="" />
                        <div className='flex mt-2 p-2'>
                            <AiFillStar className='h-3 text-[#C8A178]' />
                            <AiFillStar className='h-3 text-[#C8A178]' />
                            <AiFillStar className='h-3 text-[#C8A178]' />
                            <AiFillStar className='h-3 text-[#C8A178]' />
                            <AiFillStar className='h-3 text-[#C8A178]' />
                        </div>
                        <p className='text-lg'>Cafe Mocha</p>
                        <div className='flex items-center gap-1'>
                            <p className='text-lg font-bold'>$6750</p>
                            <del className='text-sm text-slate-500'>$7500</del>
                        </div>

                    </div>

                </div>
                <div className=" w-[200px] h-[350px] flex  flex-col rounded-lg">
                    <p className='bg-[#C8A178] rounded-full text-white w-10 text-center text-sm font-sans m-2 ml-10'>-5%</p>
                    <div className='flex items-center justify-center flex-col rounded-lg'>
                        <img className='object-cover h-64' src="https://img.freepik.com/premium-photo/cup-coffee_957255-61.jpg" alt="" />
                        <div className='flex mt-2 p-2'>
                            <AiFillStar className='h-3 text-[#C8A178]' />
                            <AiFillStar className='h-3 text-[#C8A178]' />
                            <AiFillStar className='h-3 text-[#C8A178]' />
                            <AiFillStar className='h-3 text-[#C8A178]' />
                            <AiFillStar className='h-3 text-[#C8A178]' />
                        </div>
                        <p className='text-lg'>Cafe Espresso</p>
                        <div className='flex items-center gap-1'>
                            <p className='text-lg font-bold'>$4275</p>
                            <del className='text-sm text-slate-500'>$4500</del>
                        </div>

                    </div>

                </div>
            </div>

                    <div >
                        <TopProductCard />


                    </div>


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
                    <div className="hidden md:flex items-center justify-center text-center gap-10 ">

                        <div className=" w-[200px] h-[350px] flex items-center justify-center rounded-lg mb-5">
                            {/* <p className='bg-[#C8A178] rounded-full text-white w-10 text-center text-sm m-2 '>-20%</p> */}
                            <div className='flex items-center justify-center flex-col rounded-lg'>
                                <img className='object-cover h-64' src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-10-800x800.png" alt="" />
                                <div className='flex mt-2 p-2'>
                                    <AiFillStar className='h-3 text-[#C8A178]' />
                                    <AiFillStar className='h-3 text-[#C8A178]' />
                                    <AiFillStar className='h-3 text-[#C8A178]' />
                                    <AiFillStar className='h-3 text-[#C8A178]' />
                                    <AiFillStar className='h-3 text-[#C8A178]' />
                                </div>
                                <p className='text-lg'>Cafe Corretto Indonesia</p>
                                <div className='flex items-center'>
                                    <p className='text-lg font-bold'>$10000</p>
                                    {/* <del className='text-sm text-slate-500'>$6500</del> */}
                                </div>

                            </div>
                        </div>
                        <div className=" w-[200px] h-[350px] flex  flex-col rounded-lg">
                            {/* <p className='bg-[#C8A178] rounded-full text-white w-10 text-center text-sm m-2 '>-20%</p> */}
                            <div className='flex items-center justify-center flex-col rounded-lg'>
                                <img className='object-cover h-64' src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-11.png" alt="" />
                                <div className='flex mt-2 p-2'>
                                    <AiFillStar className='h-3 text-[#C8A178]' />
                                    <AiFillStar className='h-3 text-[#C8A178]' />
                                    <AiFillStar className='h-3 text-[#C8A178]' />
                                    <AiFillStar className='h-3 text-[#C8A178]' />
                                    <AiFillStar className='h-3 text-[#C8A178]' />
                                </div>
                                <p className='text-lg'>Cafe Corretto Brazil</p>
                                <div className='flex items-center'>
                                    <p className='text-lg font-bold'>$12000</p>
                                    {/* <del className='text-sm text-slate-500'>$6500</del> */}
                                </div>

                            </div>
                        </div>
                        <div className=" w-[200px] h-[350px] flex  flex-col rounded-lg">
                            {/* <p className='bg-[#C8A178] rounded-full text-white w-10 text-center text-sm m-2 '>-20%</p> */}
                            <div className='flex items-center justify-center flex-col rounded-lg'>
                                <img className='object-cover h-64' src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-5.png" alt="" />
                                <div className='flex mt-2 p-2'>
                                    <AiFillStar className='h-3 text-[#C8A178]' />
                                    <AiFillStar className='h-3 text-[#C8A178]' />
                                    <AiFillStar className='h-3 text-[#C8A178]' />
                                    <AiFillStar className='h-3 text-[#C8A178]' />
                                    <AiFillStar className='h-3 text-[#C8A178]' />
                                </div>
                                <p className='text-lg'>Cafe Corretto Colombia</p>
                                <div className='flex items-center'>
                                    <p className='text-lg font-bold'>$10000</p>
                                    {/* <del className='text-sm text-slate-500'>$6500</del> */}
                                </div>

                            </div>
                        </div>
                        <div className=" w-[200px] h-[350px] flex  flex-col rounded-lg">
                            {/* <p className='bg-[#C8A178] rounded-full text-white w-10 text-center text-sm m-2 '>-20%</p> */}
                            <div className='flex items-center justify-center flex-col rounded-lg'>
                                <img className='object-cover h-64' src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-1.png" alt="" />
                                <div className='flex mt-2 p-2'>
                                    <AiFillStar className='h-3 text-[#C8A178]' />
                                    <AiFillStar className='h-3 text-[#C8A178]' />
                                    <AiFillStar className='h-3 text-[#C8A178]' />
                                    <AiFillStar className='h-3 text-[#C8A178]' />
                                    <AiFillStar className='h-3 text-[#C8A178]' />
                                </div>
                                <p className='text-lg'>Cafe Corretto Ethiopia</p>
                                <div className='flex items-center'>
                                    <p className='text-lg font-bold'>$20000</p>
                                    {/* <del className='text-sm text-slate-500'>$6500</del> */}
                                </div>

                            </div>
                        </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-center h-full mt-5 mb-5 md:gap-5">
                            <SpecialProductCard />

                        </div>




                    </div>

                    <div className="flex items-center  flex-col">
                        <h1>Ultimos Blogs</h1>

                        


                        <div >
                            <BlogCard />


                        </div>




                    </div>

                    <div className="flex flex-col justify-center text-center">
                        <p className="text-sm">Nos Recomiendan:</p>
                        <BrandsCarousel />
                    </div>


                </div>


            </div>
            )
}

            export default Home