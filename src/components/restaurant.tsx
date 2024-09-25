import React from "react";

interface IRestaurantProps {
    id: string
    coverImg: string
    name: string
    categoryName?: string
}

export const Restaurant: React.FC<IRestaurantProps> = ({coverImg,name,categoryName}) => {
    return (
        <div className="flex flex-col">
            <div className="py-28 bg-cover bg-center mb-2"
                style={{ backgroundImage: `url(${coverImg})` }}></div>
            <span className="mt-1 text-gray-800 text-lg font-medium">{name}</span>
            <span className="border-t mt-1 py-2 border-gray-400 text-xs opacity-50">
                {categoryName}</span>
        </div>
    )
}