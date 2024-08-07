import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Register } from '@src/biz/Login/Register'
import { Login } from '@src/biz/Login/Login'
import { StartIndex } from '@src/biz/Login/Start'
import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { auth } from '@src/hooks/useAuth'

export const LoginScreen = observer(() => {
	const [currentPage, setCurrentPage] = useState<
		'start' | 'login' | 'register'
	>('start')
	return (
		<View className=" w-screen h-full bg-[#25292e]">
			<StatusBar style="auto" />
			<Text>{auth.token}</Text>
			{currentPage === 'start' && <StartIndex changePage={setCurrentPage} />}
			{currentPage === 'login' && <Login changePage={setCurrentPage} />}
			{currentPage === 'register' && <Register changePage={setCurrentPage} />}
		</View>
	)
})
