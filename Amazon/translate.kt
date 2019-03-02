val region = "eu-central-1"

val credentials = DefaultAWSCredentialsProviderChain.getInstance()

val translate = AmazonTranslateClientBuilder.standard()
        .withCredentials(credentials)
        .withRegion(region)
        .build()
        
val original = "SnipHub is an awesome website I read often!"
        val translatedPl = translate.translateText(TranslateTextRequest()
                .withText(original)
                .withSourceLanguageCode("en")
                .withTargetLanguageCode("pl")).translatedText
