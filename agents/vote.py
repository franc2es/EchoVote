from openai import OpenAI
import toml
import os
import json
import re


model = "deepseek-chat"
BASE_URL = "https://api.deepseek.com/v1"
proposals_dir = "./proposals"
characters_dir = "./characters"
sys_prompt = "Now you are gonna be asked to respond to a decentralized governance proposal." + \
    "Your response should start with a 'For/Against/Abstain' (do not do any formatting), period, then a short comment for this proposal." + \
    "Your character setting is like below: \n"
save_dir = './response/'


def load_json(dir):
    json_files = []

    for filename in os.listdir(dir):
        if filename.endswith(".json"):
            file_path = os.path.join(dir, filename)
            with open(file_path, 'r') as file:
                try:
                    json_data = json.load(file)
                    json_files.append(json_data)
                except json.JSONDecodeError:
                    print(f"Error")
    
    return json_files


def load_proposal(id):
    json_data = {}
    filepath = proposals_dir + '/' + id + '.json'
    with open(filepath, 'r') as file:
        try:
            json_data = json.load(file)
        except json.JSONDecodeError:
            print(f"Error")

    return json_data


def vote(proposal, character):
    client = OpenAI(api_key=os.getenv("DEEPSEEK_API_KEY"), base_url=BASE_URL)

    content_sys = sys_prompt + json.dumps(character)
    content_usr = json.dumps(proposal)
    
    response = client.chat.completions.create(
        model=model,
        messages=[
            {'role': 'system', 'content': content_sys},
            {'role': 'user', 'content': content_usr},
        ],
        stream=False
    ).choices[0].message.content

    match = re.match(r"(\w+)\.\s*(.*)", response, re.DOTALL)

    json_data = {
        "name": character["name"],
        "vote": match.group(1),
        "comment": match.group(2).strip()
    }

    return json_data


def process_proposal(id):
    proposal = load_proposal(id)
    characters = load_json(characters_dir)
    
    with open(save_dir + proposal["proposal_id"] + ".json", "w") as file:
        json_response = []
        for character in characters:
            print(proposal["proposal_id"], character["name"])
            response = vote(proposal=proposal, character=character)
            print(response["vote"])
            print("-" * 20)
            json_response.append(response)
        json.dump(json_response, file, indent=4)


if __name__ == '__main__':
    # vote('0', '0')
    # proposals = load_json(proposals_dir)
    # characters = load_json(characters_dir)
    
    # for proposal in proposals:
    #     with open(save_dir + proposal["proposal_id"] + ".json", "w") as file:
    #         json_response = []
    #         for character in characters:
    #             print(proposal["proposal_id"], character["name"])
    #             response = vote(proposal=proposal, character=character)
    #             print(response["vote"])
    #             print("-" * 20)
    #             json_response.append(response)
    #         json.dump(json_response, file, indent=4)

    process_proposal("EVIP-001")