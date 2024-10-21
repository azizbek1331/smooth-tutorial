import Link from 'next/link'
import React from 'react'

const main = () => {
    return (
        <div>
            <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
                <div class="-m-1 flex flex-wrap md:-m-2">
                    <div class="flex w-1/2 flex-wrap">
                        <div class="w-1/2 p-1 md:p-2">
                            <Link href="./page">
                                <img
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
                            </Link>
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                            <Link href="./main">
                                <img
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
                            </Link>
                        </div>
                        <div class="w-full p-1 md:p-2">
                            <Link href="./dash">
                                <img
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
                            </Link>
                        </div>
                    </div>
                    <div class="flex w-1/2 flex-wrap">
                        <div class="w-full p-1 md:p-2">
                            <Link href="./fourth">
                                <img
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                            </Link>
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                            <Link href="./five">
                                <img
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
                            </Link>
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                            <Link href="./six">
                                <img
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default main
