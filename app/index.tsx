import { Text, View } from 'react-native'
import Button from '@/components/base/Button'
import { router } from 'expo-router'
import Toast from 'react-native-toast-message'
import { HelloWave } from '@/components/HelloWave'
import { StatusBar } from 'expo-status-bar'

export default function Index() {
	return (
		<View className=" w-screen h-full bg-[#25292e] justify-center items-center">
			<StatusBar style="auto" />
			<View className=" flex-row mb-5">
				<Text className=" text-white text-3xl">Come on! Miss cheese 🧀</Text>
				<HelloWave />
			</View>

			<Button
				theme="primary"
				iconName="picture-o"
				onPress={() => {
					router.push('/drawer')
				}}
			>
				Start Vlog
			</Button>
			<Button
				className="mt-4"
				theme="primary"
				iconName="angellist"
				onPress={() => {
					Toast.show({
						type: 'info',
						text1: 'Coming soon!',
					})
				}}
			>
				Exciting Moments
			</Button>

			<View className=" absolute bottom-10">
				<Text className=" text-white text-sm">design by jimmy</Text>
			</View>
		</View>
	)
}
