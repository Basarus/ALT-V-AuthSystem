/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
import alt from 'alt-client';
import * as native from 'natives';

let web;

alt.onServer('client::auth:init', init);

function init(){
    if (webview === undefined) {
        webview = new alt.WebView('http://resource/client/hud/html/index.html');
        webview.focus();
    }

    webview.on('cef::auth:authorization', (data) => alt.emitServer('server:auth:authorization', { login: data.login, password: data.password }))
    webview.on('cef::auth:registration', (data) => alt.emitServer('server:auth:registration', { login: data.login, password: data.password, email: data.email }))
    webview.on('cef::auth:recovery', (data) => alt.emitServer('server:auth:recovery', { email: data.email }))
}