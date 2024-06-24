import { Modal } from '@/components/base/Modal'
import Button from '@/components/base/Button'
import * as ImagePicker from 'expo-image-picker'
import { router } from 'expo-router'

interface TProps {
	visible: boolean
	onClose: () => void
	onGetImageSource: (uri: string) => void
}

export function ChoosePicture({ visible, onClose, onGetImageSource }: TProps) {
	const pickImageAsync = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			quality: 1,
		})

		if (!result.canceled) {
			console.log(result)
			onGetImageSource(result.assets[0].uri)
		} else {
			alert('You did not select any image.')
		}
	}

	return (
		<Modal visible={visible} onClose={onClose} title="choose">
			<Button
				theme="primary"
				onPress={() => {
					router.push('/camera')
					onClose()
				}}
			>
				Camera
			</Button>
			<Button theme="primary" className=" mt-3" onPress={pickImageAsync}>
				Album
			</Button>
		</Modal>
	)
}
