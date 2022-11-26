import { useQuery } from '@tanstack/react-query';
import CategoryCard from './CategoryCard';

const Category = () => {
    
    const { data: categories = [], refetch } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/category');
            const data = await res.json();
            console.log(data)
            return data;
        }
    })
    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-6xl font-bold text-green-900">Our Brands</p>
            </div>            
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories.map(category => <CategoryCard
                        key={category._id}
                        category={category}
                    ></CategoryCard>)
                }
            </div>

        </div>
    );
};

export default Category;