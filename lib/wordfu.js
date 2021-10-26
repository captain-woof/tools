// Copies a text to clipboard
export const copyToClipboard = async (text) => {
    await navigator?.clipboard.writeText(text)
}

// Serves text file download dynamically from string
export const serveTextFileFromString = ({ text = '', mimeType = 'text/plain', filename = 'file.txt' }) => {
    // Create data
    let dataHref = `data:${mimeType};charset=utf-8,${encodeURIComponent(text)}`

    // Create anchor tag to serve download
    let anchor = document?.createElement('a')
    anchor.setAttribute('href', dataHref)
    anchor.setAttribute('download', filename)
    
    // Serve file
    anchor.click()

    return
}