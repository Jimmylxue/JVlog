import { View, Text, Button } from 'react-native'
import { Link } from 'expo-router'

export default function Index() {
	return (
		<View
			className=" mt-4"
			style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
		>
			<Text className=" text-red-300">这里是首页</Text>
			<Link href="/details" style={{ marginTop: 40 }}>
				跳转到详情页
			</Link>
			<Link href="/drawer" style={{ marginTop: 40 }}>
				跳转到example
			</Link>

			<Link href="/home" style={{ marginTop: 40 }}>
				跳转到TAB
			</Link>

			<Link href="/explore" style={{ marginTop: 40 }}>
				跳转到TAB2
			</Link>

			<Link href="/login" style={{ marginTop: 40 }}>
				跳转到登录
			</Link>
			<Link href="/details">
				<Button title="跳转到详情页（使用按钮）" />
			</Link>
		</View>
	)
}
