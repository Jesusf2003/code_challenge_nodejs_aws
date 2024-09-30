provider "aws" {
  region = "us-east-1" # Región
}

resource "aws_dynamodb_table" "persona" {
  name = "Persona"
  billing_mode = "PAY_PER_REQUEST"
  hash_key = "id"

  attribute {
    name = "id"
    type = "S"
  }
}

resource "aws_iam_role" "lambda_exec_role" {
  name = "lambda_exec_role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
        {
            Action = "sts:AssumeRole",
            Effect = "Allow",
            Principal = {
                Service = "lambda.amazonaws.com"
            }
        }
    ]
  })
}

resource "aws_iam_role_policy" "lambda_policy" {
  name = "lambda_policy"
  role = aws_iam_role.lambda_exec_role.id
  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
        Action = ["dynamodb:PutItem", "dynamodb:Scan", "dynamodb:GetItem"],
        Effect = "Allow"
        Resource = aws_dynamodb_table.persona.arn
    }]
  })
}