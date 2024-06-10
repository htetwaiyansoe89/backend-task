# Backend Task - Chat API

## Getting Started

1. **Clone:** `git clone https://github.com/johnreginald/goanywhere-backend-task`
2. **Install Dependencies:** `npm install`
3. **Run with Docker:** `docker-compose up --build`
4. **API Endpoint:** `ws://localhost:3000` (Use any WebSocket client to test)

#### Event Name: "sendMessage"
```json
{
  "event": "sendMessage",
  "data": {
    "message": "Hello, World!"
  }
}
```

## Terraform Usage

1. **Initialize:** `terraform init`
2. **Plan:** `terraform plan`
3. **Apply:** `terraform apply`