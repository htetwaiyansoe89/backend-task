provider "aws" {
    region = "us-west-2"
}

resource "aws_instance" "chat_server" {
  ami           = "ami-0c55b159cbfafe1f0" # Amazon Linux 2
  instance_type = "t2.micro"

  tags = {
    Name = "ChatAPIServer"
  }
}