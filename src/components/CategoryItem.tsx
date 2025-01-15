import React from 'react';


function CategoryItem({ category }: { category: Category }) {
    return (
        <div className="relative border border-primary bg-gray-500 lg:h-60 sm:h-40 h-40">
            <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-lg font-bold">{category.name}</p>
            </div>
        </div>
    );
}

export default CategoryItem;
