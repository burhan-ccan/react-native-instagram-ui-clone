import { Image, Dimensions, StyleSheet, View } from "react-native"
import PagerView from 'react-native-pager-view';

function FitImage({ medias }) {

	const width = Dimensions.get('window').width
	const hg = calcHeight(medias[0].width, medias[0].height)
	function calcHeight(wd, hg) {
		const ratio = wd / width
		return hg / ratio
	}
	const _renderMedia = (media) => {
		const height = calcHeight(media.width, media.height)
		return (
			<Image
				style={{
					width,
					height
				}}
				source={{
					uri: media.src
				}}
			/>
		)
	}

	return (
		<PagerView style={styles.pagerView(hg)} onPageSelected={(r) => console.log(r.nativeEvent.pos)}>
			{
				medias.map(element => (
					_renderMedia(element)
				))
			}
		</PagerView>
	)
}

export default FitImage


const styles = StyleSheet.create({
	pagerView: (height) => ({
		height
	})
})