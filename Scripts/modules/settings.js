import { Setting, WindowAreYouSure } from "./classes.js";

const settingsWindow = document.querySelector('#settingWindow')

const openSettings = () => { new Setting(settingsWindow).openSettings() }

const saveChangeSettings = () => {
    // Validate options value in settings
    const headerTextOptionsValue = document.querySelector('#inputHeaderText').value
    const fontOptionsValue = document.querySelector('#selectFont').value
    const fontSize = document.querySelector('#sizeFont').value
    const colorHeader = document.querySelector('#headerColorInput').value
    const colorShadowHeader = document.querySelector('#headerShadowInput').value 
    const colorText = document.querySelector('#textColorInput').value

    // Its variable will be value in style 
    new Setting(settingsWindow, headerTextOptionsValue, fontOptionsValue, fontSize, colorHeader, colorShadowHeader, colorText).saveSettings()
}

const closeSettingWindow = () => {
    // Validate options value in settings
    const headerTextOptionsValue = document.querySelector('#inputHeaderText').value
    const fontOptionsValue = document.querySelector('#selectFont').value
    const fontSize = document.querySelector('#sizeFont').value
    const colorHeader = document.querySelector('#headerColorInput').value
    const colorShadowHeader = document.querySelector('#headerShadowInput').value 
    const colorText = document.querySelector('#textColorInput').value

    // Check changes
    new Setting(settingsWindow, headerTextOptionsValue, fontOptionsValue, fontSize, colorHeader, colorShadowHeader, colorText).closeSettingWindow()
}

const areYouSureFn = answer => {
    // Validate options value in settings
    const headerTextOptionsValue = document.querySelector('#inputHeaderText').value
    const fontOptionsValue = document.querySelector('#selectFont').value
    const fontSize = document.querySelector('#sizeFont').value
    const colorHeader = document.querySelector('#headerColorInput').value
    const colorShadowHeader = document.querySelector('#headerShadowInput').value 
    const colorText = document.querySelector('#textColorInput').value

    if (answer === 'save') {
        // It variable will be need if we save settings or not save 
        new WindowAreYouSure(settingsWindow, headerTextOptionsValue, fontOptionsValue, fontSize, colorHeader, colorShadowHeader, colorText).save()
    } else if (answer === 'dont') {
        new WindowAreYouSure(settingsWindow, headerTextOptionsValue, fontOptionsValue, fontSize, colorHeader, colorShadowHeader, colorText).dontSave()
    }
}

export { openSettings, saveChangeSettings, closeSettingWindow, areYouSureFn }