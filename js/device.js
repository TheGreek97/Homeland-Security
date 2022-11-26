class Device {
    constructor(id, name, mac) {
        this.id = id;
        this.name = name;
        this.mac = mac;
        this.isBlacklisted= false;
    }

    getId () {
        return this.id;
    }
    getName () {
        return this.name;
    }
    getMac () {
        return this.mac;
    }
    getIsBlacklisted() {
        return this.isBlacklisted;
    }

    setIsBlacklisted(bool) {
        this.isBlacklisted = bool;
    }

    constructTableRow (){
        let button = this.isBlacklisted ?  `<button type="button" class="btn btn-danger" onclick="addToWhiteList(${this.id})">Delete</button>` :
            `<button type="button" class="btn btn-warning" onclick="addToBlackList(${this.id})">Add to blacklist</button>`
        return `
                <tr id="device_${this.id}">
                    <th scope="row">${this.id}</th>
                    <td>${this.name}</td>
                    <td>${this.mac}</td>
                    <td>${button}</td>
                </tr>
            `
    } 
}