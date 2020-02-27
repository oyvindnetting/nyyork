export function dropShadow (horizontal, vertical, blur) {
    return `
        -webkit-box-shadow: `+horizontal+` `+vertical+` `+blur+` 0px rgba(0,0,0,1);
        -moz-box-shadow:  `+horizontal+` `+vertical+` `+blur+` 0px rgba(0,0,0,1);
        box-shadow:  `+horizontal+` `+vertical+` `+blur+` 0px  rgba(0,0,0,1);
    `
}
