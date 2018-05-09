# Power BI Visuals

Learn how to build Power BI visuals!
 
## Developing Your First PowerBI Visual
 
This section is to provide you with a step by step tutorial of developing your first PowerBI visual.
In this tutorial, you will be building a simple bar chart. The source code is located here in the [Sample Bar Chart Repo](https://github.com/Microsoft/PowerBI-visuals-sampleBarChart).

![](Tutorial/images/SampleBarChart.png)

### Setting Up Environment
1. [Install PowerBI visuals CLI tool](tools/README.md#installation)
2. [Create SSL certifications to enable live preview of visuals](tools/CreateCertificate.md)
3. [Install generated SSL certifications to enable live preview of visuals](tools/CertificateSetup.md)
4. [Enable Developer Tools in PowerBI](tools/DebugVisualSetup.md)
5. [Create New PowerBI Visual Project](tools/usage.md#creating-a-new-visual)
6. [Start Development Server for Live Update and Incremental Development](tools/usage.md#testing-your-visual-in-powerbi)
7. [Adding the Debug Visual from the Visual Well into your Favorite Report](tools/usage.md#viewing-your-visual-in-powerbi)
8. [Adding External Libraries](Tutorial/ExternalLibraries.md)
9. [Installing @Types for External Libraries](Tutorial/@Types.md)

### Building Bar Chart
1. [Building a Visual with Static Data](Tutorial/StaticVisual.md)
2. [Adding Databinding to the Bar Chart](Tutorial/DataBinding.md)
3. [Adding Color to the Bar Chart](Tutorial/ColorPalette.md)
4. [Adding Selection and Interaction with Other Visuals](Tutorial/Selection.md)
5. [Adding Static Objects to Property Pane](Tutorial/StaticObjects.md)
6. [Adding Databound Objects to Property Pane](Tutorial/DataBoundObjects.md)
7. [Adding Tooltips to the Bar Chart](Tutorial/ToolTips.md)
8. [Adding A Slider control to the Bar Chart](Tutorial/SliderControl.md)
9. [Adding Locale support to the Bar Chart](https://github.com/Microsoft/PowerBI-visuals-sampleBarChart/blob/master/Tutorial/Locale.md)
10. [Adding URL Launcher element to the Bar Chart](Tutorial/LaunchURL.md)
11. [Finally Package for Distribution ... Done!](tools/usage.md#packaging-your-visual-for-distribution)

### Building a Slicer Visual
1. [The sample slicer visual](https://github.com/Microsoft/powerbi-visuals-sampleslicer)
2. [Adding advanced filter API](https://github.com/Microsoft/powerbi-visuals-sampleslicer/blob/master/doc/AddingAdvancedFilterAPI.md)
3. [Using the advanced filter API](https://github.com/Microsoft/powerbi-visuals-sampleslicer/blob/master/doc/UsingAdvancedFilterAPI.md)
3. [Added bookmarks support](Tutorial/BookmarksSupport.md)

### Building R Powered Custom Visual (corrplot)
1. [Creating a new R Powered Custom Visual](RVisualTutorial/CreateNewVisual.md)
2. [Starting a simple R Script](RVisualTutorial/CorrplotScript.md)
3. [Adding a static property to the property pane](RVisualTutorial/PropertiesPane.md)
4. [Validate input data in R Script](RVisualTutorial/InputValidationInR.md)
5. [Creating R Powered Custom Visual with HTML output](RVisualTutorial/CreateRHTML.md)

## Table of Contents

* [Anatomy of a Visual Project](VisualProject.md)
* [Installing PowerBI Visuals Tool](tools/README.md#installation)
    * [Install SSL Certifications](tools/CertificateSetup.md)
    * [Enable Developer Tools](tools/DebugVisualSetup.md)
    * [Tools Usage Guide](tools/usage.md)
    * [Debugging Guide](tools/debugging.md)
* [Adding Power BI utils](Tutorial/Utils.md)    
* [Adding External Libraries](Tutorial/ExternalLibraries.md)
    * [Installing Typings for Libraries](Tutorial/Typings.md)
* [Visual Capabilities Definition](Capabilities/Capabilities.md)
    * [Data Roles](Capabilities/Capabilities.md#define-the-data-fields-your-visual-expects---dataroles)
    * [Data View Mappings](Capabilities/DataViewMappings.md)
    * [Objects](Capabilities/Objects.md)
    * [Highlighting](Capabilities/Highlighting.md)
	* [Drill Down](Capabilities/Drilldown.md)
* [Visual Documentation](Visual/Visual.md)
    * [Visual/IVisual Api](Visual/IVisualApi.md)
    * [Handling Selection in Visuals](Visual/Selection.md)
    * [Adding Tooltips to Visuals](Visual/Tooltips.md)
    * [Localizing Visuals](Visual/Locale.md)
    * [Applying filters](https://github.com/Microsoft/powerbi-visuals-sampleslicer/blob/master/doc/UsingAdvancedFilterAPI.md)
* [Mobile development guideline](Tutorial/MobileGuideline.md)
* [PowerBI Glossary](Glossary.md)
* [Change Log](ChangeLog.md)
* [Roadmap](Roadmap/README.md)

## Reporting Issues

If you have any issues with Power BI custom visuals or the command line tools, please let us know. First, search the Power BI Developer Forums page to see if your issue has already been reported. If it already exists, please contribute your experience to the comments. Otherwise, create a new issue. Be sure to be as detailed as possible about exactly what you were doing when the issue occured and how we can reproduce it.

* [PowerBI Developer Forum](https://community.powerbi.com/t5/Developer/bd-p/Developer) - Custom visual creation, API usage, real-time dashboards, integrating with Power BI, content packs. Basically, everything about extending Power BI.
* [PowerBI-visuals-tools issue page](https://github.com/Microsoft/PowerBI-visuals-tools/issues) - Issues related to the CLI tools specifically
* [PowerBI-visuals issue page](https://github.com/Microsoft/PowerBI-visuals/issues) - Any other issues related to Power BI visuals
