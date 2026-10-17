export class Form {
    constructor(formId) {
        this.formElement = document.getElementById(formId);
    }

    getResults() {
        const formData = new FormData(this.formElement);
        const results = {};
        
        for (let [key, value] of formData.entries()) {
            results[key] = value;
        }
        return results;
    }

    isValid() {
        return this.formElement.checkValidity();
    }

    reset() {
        this.formElement.reset();
    }
}
