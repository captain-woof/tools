import ImageNext from 'next/image'

export const Image = ({ id, alt, src, objectPosition = 'center', styleContainer }) => {
    <div style={styleContainer}>
        <ImageNext id={id} src={src} alt={alt} layout='fill' objectFit='cover' objectPosition={objectPosition} />
    </div>
}