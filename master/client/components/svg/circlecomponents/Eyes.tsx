const Eyes = ({ eyeOffSetX, eyeOffSetY, eyeRadius }) => (
    <>
        <circle
            cx={-eyeOffSetX}
            cy={- eyeOffSetY}
            r={eyeRadius}
        />

        <circle
            cx={eyeOffSetX}
            cy={- eyeOffSetY}
            r={eyeRadius}
        />
    </>
)
Eyes
export default Eyes