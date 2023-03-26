import { motion } from 'framer-motion';
import { socials } from '../constants';
import { slideVertical } from '../utils/motion';

const Footer = () => {
    return (
        <motion.footer
            variants={slideVertical}
            initial="hidden"
            whileInView="show"
            className="mt-4"
        >
            <div className="flex flex-col">
                <div className="my-8 h-[2px] bg-white opacity-10" />

                <div className="flex items-center lg:justify-between justify-center flex-wrap gap-4">
                    <a href="#" className="font-extrabold text-[24px] text-white cursor-pointer hover:animate-bounce">Ícaro Apolo</a>
                    <p className="font-normal text-[14px] text-white opacity-50">Copyright 2023 - Todos os direitos reservados.</p>
                    <div className="flex gap-4">
                        {socials.map((social) => (
                            <>
                                <a href={social.href} target="_blank" className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                                    <img
                                        key={social.name}
                                        alt={social.name}
                                        src={social.url}
                                        className="object-contain hover:animate-pulse"
                                    />
                                </a>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </motion.footer >
    )
}

export default Footer