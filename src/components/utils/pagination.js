

export const Pager = () => {


    return (
        <div className="justify-center">
            <div className="flex justify-center mt-10">
                <nav aria-label="Page navigation example">
                    <ul className="list-style-none flex">
                        <li>
                            <a
                                className=" relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 hover:font-extrabold hover:text-yellow-400"
                                href="#"
                                aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        
                        <li>
                            <a
                                className="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 hover:font-extrabold hover:text-yellow-400"
                                href="#"
                                aria-label="Next"
                            ><span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}