"use client"
import "./page.css"
import { useEffect, useState } from 'react';

const Page = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:8080/api/data');
            const result = await response.json();
            setData(result);
        };
        fetchData();
    }, []);

    return (
        <div>
            {data.map((item, index) => (
                <div key={index} class="flex min-h-screen items-center justify-center bg-black font-bold text-white">
                    <div class=" text-center space-y-12">
                        <div class="text-center text-5xl font-bold">
                            {item.text}
                        </div>
                            {item.year}
                    </div>
                </div>
            ))}
        </div>    
    );
};

export default Page;
