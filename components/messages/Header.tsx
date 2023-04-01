import React from 'react';
import Image from 'next/image';

const Header = () => {
    return (
        <header>
            <div>
                <div>
                    <Image
                        className="cursor-pointer"
                        src='/foodie-logo.svg'
                        alt='foodie logo'
                        width='120'
                        height='30'
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
