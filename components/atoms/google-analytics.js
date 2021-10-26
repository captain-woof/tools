import Script from 'next/script'

export default function GoogleAnalytics() {
    return (
        <>
            <Script id='google-analytics-script1' async src="https://www.googletagmanager.com/gtag/js?id=G-1RV2HCF17P"/>
            <Script id='google-analytics-script2' dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-1RV2HCF17P');
                `
            }}/>
        </>
    )
}