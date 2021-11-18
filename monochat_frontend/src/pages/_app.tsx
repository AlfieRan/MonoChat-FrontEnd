import React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import {AppProps} from 'next/app';
import './styles.css';

export default function App({Component, pageProps}: AppProps) {
	return (
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
