import React from 'react'

const BlogCard = () => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full rounded-lg" src="https://media.istockphoto.com/id/1134471347/photo/couple-relaxing-in-a-cafe.jpg?s=612x612&w=0&k=20&c=1VQ5AKVNA9PoE2OhYLU9bPKcYP7GmgUHShxPMiB3On8=" alt="Sunset in the mountains"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Encuentro de almas afines</div>
                    <p className="text-gray-700 text-base">
                    "Moonbean no es solo un lugar para tomar café, es un punto de encuentro para almas afines. Me encanta venir aquí y sumergirme en conversaciones profundas con amigos nuevos y viejos. La variedad de bebidas es impresionante, pero lo que realmente destaca..."
                    </p>
                    <button className='text-sm bg-[#C8A178] text-white  p-2 rounded-full w-24 h-8 mt-3 font-semibold flex items-center justify-center'>Leer Mas</button>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#cafe</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#amigos</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#moonbean</span>
                </div>
        </div>
    )
}

export default BlogCard